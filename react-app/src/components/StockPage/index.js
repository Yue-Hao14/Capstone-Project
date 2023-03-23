import { useParams } from 'react-router-dom'
import OpenModalButton from '../OpenModalButton'
import AddStockToWatchlistModal from './AddStockToWatchlistModal'


function StockPage() {
  const { ticker } = useParams()

  return (
    <div className="stock-page-container">

      <h1>Welcome to Stock Page</h1>
      <div className="stock-page-right-container">
        <div className="stock-page-right-watchlist-container">
          <OpenModalButton
            modalComponent={<AddStockToWatchlistModal ticker={ticker}/>}
            buttonText={
              <div className="stock-page-right-watchlist-button">
                <i className="fa-solid fa-check" />
                Add to Watchlist
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default StockPage