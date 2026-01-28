import Image from 'next/image'
import Link from 'next/link'
import { Lock, ExternalLink, MapPin, Link2, Briefcase, Calendar } from 'lucide-react'
import { TwitterConfig } from '@/config/twitter'

interface TwitterProfileProps {
    config: TwitterConfig
}

export function TwitterProfile({ config }: TwitterProfileProps) {
    const {
        displayName,
        username,
        bio,
        isPrivate,
        isVerified,
        category,
        location,
        website,
        joinedDate,
        following,
        followers,
        avatarUrl,
        bannerUrl,
        profileUrl,
    } = config

    return (
        <div className="mx-auto w-full max-w-xl overflow-hidden rounded-xl border border-border bg-background">
            <div className="relative h-32 w-full bg-muted sm:h-40">
                <Image
                    src={bannerUrl}
                    alt="Profile banner"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative px-4 pb-4">
                <div className="relative -mt-12 mb-3 sm:-mt-16">
                    <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-background bg-background sm:h-28 sm:w-28">
                        <Image
                            src={avatarUrl}
                            alt={displayName}
                            width={112}
                            height={112}
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <div className="flex items-center gap-1.5">
                        <h1 className="text-lg font-bold text-primary-foreground sm:text-xl">
                            {displayName}
                        </h1>
                        {isPrivate && (
                            <Lock className="h-4 w-4 text-tertiary-foreground" />
                        )}
                        {isVerified && (
                            <svg
                                viewBox="0 0 22 22"
                                className="h-5 w-5 text-[#1d9bf0]"
                                fill="currentColor"
                            >
                                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681.132-.637.075-1.299-.165-1.903.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                            </svg>
                        )}
                    </div>
                    <p className="text-sm text-tertiary-foreground">@{username}</p>
                </div>

                {bio && (
                    <p className="mb-3 text-sm text-primary-foreground">{bio}</p>
                )}

                <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-tertiary-foreground">
                    {category && (
                        <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {category}
                        </span>
                    )}
                    {location && (
                        <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {location}
                        </span>
                    )}
                    {website && (
                        <Link
                            href={`https://${website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[#1d9bf0] transition-colors hover:underline"
                        >
                            <Link2 className="h-4 w-4" />
                            {website}
                        </Link>
                    )}
                    {joinedDate && (
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Joined {joinedDate}
                        </span>
                    )}
                </div>

                <div className="mb-4 flex gap-4 text-sm">
                    <span>
                        <strong className="text-primary-foreground">{following}</strong>
                        <span className="ml-1 text-tertiary-foreground">Following</span>
                    </span>
                    <span>
                        <strong className="text-primary-foreground">{followers}</strong>
                        <span className="ml-1 text-tertiary-foreground">Followers</span>
                    </span>
                </div>

                <Link
                    href={profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-muted"
                >
                    <ExternalLink className="h-4 w-4" />
                    View on X
                </Link>
            </div>
        </div>
    )
}
