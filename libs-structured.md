devfest/
├── apps/
│   ├── book-review/              # Main Angular application (entry point)
│   └── book-review-e2e/          # End-to-end tests
├── libs/
│   ├── features/
│   │   ├── books/             # Feature library for book management
│   │   ├── authors/           # Feature library for author management
│   │   └── reviews/           # Feature library for review management
│   ├── ui/
│   │   ├── book-list/         # UI component library for displaying books
│   │   ├── author-card/       # UI component library for author details
│   │   └── review-summary/    # UI component library for reviews
│   ├── core/
│   │   ├── auth/              # Core library for authentication
│   │   ├── api/               # Core library for API services
│   │   └── utils/             # Core library for shared utilities
│   └── data-access/
│       ├── books/             # Library for handling book-related data
│       ├── authors/           # Library for handling author-related data
│       └── reviews/           # Library for handling review-related data
└── nx.json                    # Nx workspace configuration
