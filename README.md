# AI-Powered Shopping Cart Price Optimizer

A modern e-commerce price optimization platform that uses real-time API data and MongoDB to provide intelligent shopping recommendations and price comparisons across multiple platforms.

## 🚀 Features

### Frontend (React + TypeScript)
- **Real-time Product Search** with category filtering
- **AI-Powered Price Comparison** across DummyJSON, FakeStore API, and simulated Amazon
- **Smart Shopping Cart** with optimization recommendations
- **Dynamic Savings Dashboard** with analytics
- **Responsive Design** with Tailwind CSS

### Backend (Node.js + Express + MongoDB)
- **RESTful API** for product management and optimization
- **Real-time Price Updates** with scheduled jobs
- **AI Optimization Engine** for cart and product recommendations
- **Analytics System** for tracking user behavior and savings
- **MongoDB Integration** for flexible product data storage

### AI & Optimization Features
- **Price History Tracking** with trend analysis
- **Similar Product Recommendations** based on ingredients and keywords
- **Bundle Optimization** for maximum savings
- **Platform Performance Analytics**
- **Smart Alternative Suggestions**

## 🏗️ Architecture

```
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API service layer
│   │   └── utils/          # Utility functions
├── backend/                 # Node.js API server
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── services/           # Business logic
│   └── server.js           # Express server
└── .env                    # Environment configuration
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16+)
- MongoDB (local or cloud)
- npm or yarn

### Environment Setup
1. Copy `.env.example` to `.env` and configure:
```env
MONGODB_URI=mongodb://localhost:27017/ai-price-optimizer
DUMMYJSON_API_URL=https://dummyjson.com
FAKESTORE_API_URL=https://fakestoreapi.com
JWT_SECRET=your-jwt-secret-key
PORT=3001
VITE_API_BASE_URL=http://localhost:3001/api
```

### Installation
```bash
# Install dependencies
npm install

# Install backend dependencies
cd backend && npm install

# Start MongoDB (if running locally)
mongod

# Start both frontend and backend
npm run dev:full

# Or start separately:
npm run dev:backend  # Backend on port 3001
npm run dev          # Frontend on port 5173
```

## 📊 API Endpoints

### Products
- `GET /api/products` - Get products with filtering and pagination
- `GET /api/products/:id` - Get single product with AI recommendations
- `POST /api/products/sync` - Sync products from external APIs
- `GET /api/products/:id/price-history` - Get price history

### Cart Management
- `GET /api/cart/:sessionId` - Get cart by session
- `POST /api/cart/:sessionId/items` - Add item to cart
- `PUT /api/cart/:sessionId/items/:index` - Update cart item
- `DELETE /api/cart/:sessionId/items/:index` - Remove cart item

### AI Optimization
- `GET /api/optimizer/product/:id` - Optimize single product
- `POST /api/optimizer/compare` - Compare multiple products
- `GET /api/optimizer/recommendations/:category` - Get AI recommendations
- `GET /api/optimizer/insights` - Get market insights

### Analytics
- `GET /api/analytics/daily/:date` - Get daily analytics
- `GET /api/analytics/summary` - Get analytics summary
- `GET /api/analytics/realtime` - Get real-time metrics

## 🤖 AI Features

### Price Optimization Algorithm
```javascript
// Example: Find best price across platforms
const bestPrice = optimizerService.findBestPrice(product);
const savings = optimizerService.calculateSavings(product);
```

### Smart Recommendations
- **Ingredient-based matching** for personal care products
- **Category similarity** for general products
- **Price-performance optimization**
- **Bundle recommendations** for related items

### Real-time Updates
- **Scheduled price updates** every hour
- **Price history tracking** for trend analysis
- **Volatility simulation** for realistic price patterns

## 🔧 Customization

### Adding New Data Sources
1. Extend `apiService.js` with new API integration
2. Update product transformation logic
3. Add platform to MongoDB schema
4. Update frontend components

### Custom Optimization Logic
1. Modify `optimizerService.js` algorithms
2. Add new recommendation types
3. Implement ML models for better predictions

## 📈 Performance & Scalability

- **MongoDB indexing** for fast queries
- **API response caching** for frequently accessed data
- **Pagination** for large datasets
- **Error handling** with graceful fallbacks
- **Rate limiting** for API protection

## 🧪 Testing

```bash
# Run frontend tests
npm test

# Run backend tests
cd backend && npm test

# Run integration tests
npm run test:integration
```

## 🚀 Deployment

### Production Build
```bash
# Build frontend
npm run build

# Start production server
cd backend && NODE_ENV=production node server.js
```

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up -d
```

## 📝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **DummyJSON** for product data API
- **Fake Store API** for additional product data
- **MongoDB** for flexible data storage
- **React** and **Node.js** communities for excellent tools

---

Built with ❤️ for AI-powered e-commerce optimization