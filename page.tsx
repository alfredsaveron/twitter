import { TwitterProfile } from '@/section/twitter'
import { twitterConfig } from '@/config/twitter'

export const metadata = {
    title: 'Twitter',
    description: 'My Twitter profile',
}

export default function TwitterPage() {
    return (
        <>
            <Hero title="Twitter" />
            <Container type="section" className="pb-16">
                <TwitterProfile config={twitterConfig} />
            </Container>
        </>
    )
}
