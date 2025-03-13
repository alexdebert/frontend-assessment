## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Information

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

To complete all the tasks I used the following libraries:
- Tailwind for the styling and design
- Formik for the form implementation
- Yup for the form validation

For the architecture structure, I applied basic implementation from Next.js documentation with the following
```bash
listings-app/
├── app/
│   ├── (main)/                # Optional route group for main layout
│   │   ├── page.tsx           # Home page (Listings Page)
│   │   └── listing/           # Dynamic route for listing details
│   │       └── [id]/          # Dynamic segment for listing ID
│   │           └── page.tsx   # Listing details page
│   ├── error.tsx              # Global error page
│   ├── layout.tsx             # Global layout for the app
│   └── not-found.tsx          # Global 404 page
│
├── components/                # Reusable components
│   ├── CardDetail.tsx         # Single card detail UI component
│   ├── ContactForm.js         # Contact Agent form UI component
│   ├── ErrorBoundary.js       # Error Boundary UI component
│   ├── FilterSection.js       # Filter section UI component
│   ├── ListingCard.js         # Single UI component that displays information from 1 element of the list in the main screen
│   ├── ListingCardDetails.js  # Entire card details UI component
│   ├── Listings.js            # UI component that displays a list of elements
│   └── Loading.js             # Loading fallback UI
│
├── public/                    # Static assets
│   ├── listings.json          # Local JSON data
│   └── ...                    # Other static assets
│
├── styles/                    # Global styles
│   └── globals.css            # Tailwind CSS
│
├── types/                     # Typing
│   └── types.ts               # Typescript file for listings typing
│
├── utils/                     # Utility functions
│   └── fetchListings.js       # Fetch listings data
└── ...                        # Configuration files
```

