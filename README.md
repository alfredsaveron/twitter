![Preview](/design/preview.png)

# Twitter/X Card

Static Twitter/X profile card for Next.js - no API required. 

## Installation

1. Copy the following files to your Next.js project:

```
config/twitter.ts        # Configuration
components/sections/twitter.tsx  # Component
```

2. Add your profile images to `/design/`:
   - `twitter-avatar.png` - Profile picture
   - `twitter-banner.png` - Banner image

3. Create a page to display the profile:

```tsx
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
  location: 'world',
  website: 'website',
  joinedDate: 'January 2020',
  
  following: 100,
  followers: 500,
  
  avatarUrl: '/design/twitter-avatar.png',
  bannerUrl: '/design/twitter-banner.png',
  
  profileUrl: 'https://x.com/yourusername',
}
```

## Dependencies

- Next.js 13+
- Tailwind CSS
- lucide-react

## Tailwind CSS Classes


- `primary-foreground` - Main text color
- `tertiary-foreground` - Secondary text color
- `border` - Border color
- `muted` - Hover background
- `background` - Card background
