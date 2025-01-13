# HR Hiring Manager Application - Master Plan

## 1. Application Architecture

### Tech Stack
- Frontend: Next.js 14 (App Router)
- Authentication: Clerk
- Database: PostgreSQL
- File Storage: AWS S3
- AI Integration: Vercel AI + OpenAI
- E-Signature: DocuSign
- PDF Generation: react-pdf or PDFKit

### Core Components
```typescript
src/
  ├── app/                    # Next.js App Router
  │   ├── api/               # API Routes
  │   ├── jobs/              # Job Postings List Page
  │   └── jobs/[id]/         # Job Posting Detail Page
  │   ├── applications/      # Applications List Page
  │   └── applications/[id]/ # Application Detail Page
  ├── components/            # Reusable Components
  ├── lib/                   # Utility Functions
  └── types/                 # TypeScript Definitions
```

## 2. Data Models

### Offer
```typescript
interface Offer {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  status: 'draft' | 'pending' | 'approved' | 'signed';
  content: string;          // Markdown content
  version: number;
  collaborators: string[];  // User IDs
  metadata: {
    propertyAddress: string;
    listingPrice: number;
    downPayment: number;
    buyerCommission: number;
    sellerCommission: number;
    appraisalDetails: string;
    inspectionDetails: string;
  }
}
```

### Chat Message
```typescript
interface ChatMessage {
  id: string;
  offerId: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  userId: string;
}
```

### File Upload
```typescript
interface UploadedFile {
  id: string;
  offerId: string;
  fileName: string;
  fileType: string;
  s3Key: string;
  uploadedBy: string;
  uploadedAt: Date;
}
```

### Audit Log
```typescript
interface AuditLog {
  id: string;
  offerId: string;
  userId: string;
  action: 'view' | 'edit' | 'create' | 'delete';
  timestamp: Date;
  details: string;
}
```

## 3. Key Features Implementation

### Authentication Flow
1. Implement Clerk authentication
2. Protected routes for authenticated users
3. Redirect unauthorized users to login

### Offer List View
1. Server-side fetching of offers
2. Client-side offer list component
3. New offer creation modal
4. Basic offer metadata display

### Offer Detail Page
1. Chat Component
   - Message input
   - Chat history display
   - AI integration via Vercel AI
   - Persistent chat history

2. File Upload Section
   - Drag-and-drop interface
   - Multiple file type support
   - S3 integration
   - Progress indicators

3. Offer Display
   - Markdown rendering
   - Version history
   - Collaborative editing
   - PDF export functionality

### AI Integration
1. Document Processing
   - Automatic information extraction
   - Structured review interface
   - Approval workflow

2. Chat Commands
   - Update listing price
   - Modify terms
   - Update commissions
   - Edit property details

### DocuSign Integration
1. Document preparation
2. Signature request flow
3. Status tracking
4. Completion notifications

## 4. API Endpoints

### Offers
```typescript
POST /api/offers                 // Create new offer
GET /api/offers                  // List offers
GET /api/offers/:id              // Get offer details
PUT /api/offers/:id              // Update offer
DELETE /api/offers/:id           // Delete offer
```

### Chat
```typescript
POST /api/offers/:id/chat        // Send message
GET /api/offers/:id/chat         // Get chat history
```

### Files
```typescript
POST /api/offers/:id/files       // Upload file
GET /api/offers/:id/files        // List files
DELETE /api/offers/:id/files/:fileId // Delete file
```

### AI
```typescript
POST /api/ai/extract            // Extract document info
POST /api/ai/generate           // Generate offer
POST /api/ai/update             // Update offer content
```

## 5. Implementation Phases

### Phase 1: Foundation
- Basic Next.js setup
- Authentication implementation
- Database setup
- Basic offer CRUD operations

### Phase 2: Core Features
- Offer list view
- Basic offer detail page
- File upload functionality
- Simple chat interface

### Phase 3: AI Integration
- Document processing
- Information extraction
- Chat commands
- Offer generation

### Phase 4: Advanced Features
- PDF export
- DocuSign integration
- Version control
- Audit logging

### Phase 5: Polish
- UI/UX improvements
- Performance optimization
- Error handling
- Testing

## 6. Security Considerations
- Implement proper role-based access
- Secure file uploads
- API rate limiting
- Audit logging
- Data encryption at rest

## 7. Monitoring and Analytics
- Error tracking
- User activity monitoring
- Performance metrics
- AI usage analytics
