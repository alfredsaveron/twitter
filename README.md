# Twitter/X Card

Customizable Twitter/X profile card component for Next.js applications.

## Installation

1. Copy the following files to your Next.js project:

```
config/twitter.ts        # Configuration
components/sections/twitter.tsx  # Component
```

2. Add your profile images to `public/design/`:
   - `twitter-avatar.png` - Profile picture
   - `twitter-banner.png` - Banner image

3. Create a page to display the profile:

```tsx
// app/twitter/page.tsx
import { TwitterProfile } from '@/components/sections/twitter'
import { twitterConfig } from '@/config/twitter'

export default function TwitterPage() {
  return <TwitterProfile config={twitterConfig} />
}
```

## Configuration

Edit `config/twitter.ts`

```ts
export const twitterConfig = {
  displayName: 'Your Name',
  username: 'yourusername',
  bio: 'Your bio here',
  isPrivate: false,
  isVerified: false,
  
  category: 'Science & Technology',
  location: 'Vienna, Austria',
  website: 'yoursite.com',
  joinedDate: 'January 2020',
  
  following: 100,
  followers: 500,
  
  avatarUrl: '/design/twitter-avatar.png',
  bannerUrl: '/design/twitter-banner.png',
  
  profileUrl: 'https://x.com/yourusername',
}
```

## Dependencies

- Next.js 13+ (App Router)
- Tailwind CSS
- lucide-react

## Tailwind CSS Classes


- `primary-foreground` - Main text color
- `tertiary-foreground` - Secondary text color
- `border` - Border color
- `muted` - Hover background
- `background` - Card background
