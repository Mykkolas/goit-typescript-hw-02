import './App.css'
import { useState, type JSX } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'
import type { UnsplashApiResponse, UnsplashImage } from './types/types'




function App(): JSX.Element {

  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState<string>("")
  const [totalPages, setTotalPages] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);


  const KEY = "TMkyf0x3uXg1wyndXR4Nf2dY-Y9mHU3YTJzOrc9nXR0"
  async function fetchImages(searchQuery: string, newPage = 1, isLoadMore = false): Promise<void> {
    try {
      if (isLoadMore) {
        setLoadingMore(true)
      }
      else {
        setLoading(true)
      }
      setError(false)
      const response = await axios.get<UnsplashApiResponse>("https://api.unsplash.com/search/photos", {
        params: { query: searchQuery, page: newPage, client_id: KEY, per_page: 12 },
      })
      console.log("API Response", response.data);
      if (response.data.results.length === 0) {
        toast.error("No images found!")
        return
      }

      setImages(prevImages => newPage === 1 ? response.data.results : [...prevImages, ...response.data.results])
      setPage(newPage)
      setQuery(searchQuery)
      setTotalPages(response.data.total_pages)
      console.log(response.data);

    }
    catch (err) {
      setLoading(false)
      setError(true)
      toast.error("Failed to fetch images!")
      console.log("Error", err);
    }
    finally {
      if (isLoadMore) {
        setLoadingMore(false)
      } else {
        setLoading(false)
      }
    }
  }

  async function loadMore(): Promise<void> {
    setLoadingMore(true);
    try {
      await fetchImages(query, page + 1);
    } finally {
      setLoadingMore(false);
    }
  }

  function handleSearch(newQuery: string): void {
    setImages([])
    setPage(1)
    fetchImages(newQuery, 1)
  }

  function openModal(image: UnsplashImage): void {
    setIsModalOpen(true)
    setSelectedImage(image)
  }

  function closeModal(): void {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <>
      <div><Toaster position='top-right' /></div>
      <SearchBar onSubmit={handleSearch} disabled={!!selectedImage} /> {/* makes booalean value */}
      {loading && <Loader loading={loading} />}
      {error && < ErrorMessage />
      }
      <ImageGallery images={images} onImageClick={openModal} />
      {page < totalPages && images.length > 0 && (
        <LoadMoreBtn onClick={loadMore} loadingMore={loadingMore} />
      )}
      <ImageModal isOpen={isModalOpen} image={selectedImage} onClose={closeModal} />
    </>
  )
}

export default App