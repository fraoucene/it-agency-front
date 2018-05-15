import * as  React from 'react';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    FacebookShareCount,
    GooglePlusIcon,
    GooglePlusShareButton,
    GooglePlusShareCount,
    LinkedinIcon,
    LinkedinShareButton,
    LinkedinShareCount,
    LivejournalIcon,
    LivejournalShareButton,
    PinterestIcon,
    PinterestShareButton,
    PinterestShareCount,
    RedditIcon,
    RedditShareButton,
    RedditShareCount,
    TelegramIcon,
    TelegramShareButton,
    TumblrIcon,
    TumblrShareButton,
    TumblrShareCount,
    TwitterIcon,
    TwitterShareButton,
    VKIcon,
    VKShareButton,
    VKShareCount,
    WhatsappIcon,
    WhatsappShareButton,
} from 'react-share';

export class Socials extends React.Component<{}, void> {
    render() {
        const shareUrl = 'http://github.com';
        const title = 'GitHub';

        return (
            <div className="Demo__container">
                <div className="Demo__some-network">
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        >
                        <FacebookIcon
                            size={32}
                            round />
                    </FacebookShareButton>

                    <FacebookShareCount
                        url={shareUrl}
                        className="Demo__some-network__share-count">
                        {(count: any) => count}
                    </FacebookShareCount>
                </div>

                <div className="Demo__some-network">
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        >
                        <TwitterIcon
                            size={32}
                            round />
                    </TwitterShareButton>

                    <div className="Demo__some-network__share-count">
                        &nbsp;
                    </div>
                </div>

                <div className="Demo__some-network">
                    <TelegramShareButton
                        url={shareUrl}
                        title={title}
                        >
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>

                    <div className="Demo__some-network__share-count">
                        &nbsp;
                    </div>
                </div>

                <div className="Demo__some-network">
                    <WhatsappShareButton
                        url={shareUrl}
                        title={title}
                        separator=":: "
                        >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <div className="Demo__some-network__share-count">
                        &nbsp;
                    </div>
                </div>

                <div className="Demo__some-network">
                    <GooglePlusShareButton
                        url={shareUrl}
                        >
                        <GooglePlusIcon
                            size={32}
                            round />
                    </GooglePlusShareButton>

                    <GooglePlusShareCount
                        url={shareUrl}
                        className="Demo__some-network__share-count">
                        {(count: any) => count}
                    </GooglePlusShareCount>
                </div>

                <div className="Demo__some-network">
                    <LinkedinShareButton
                        url={shareUrl}
                        title={title}
                        windowWidth={750}
                        windowHeight={600}
                        >
                        <LinkedinIcon
                            size={32}
                            round />
                    </LinkedinShareButton>

                    <LinkedinShareCount
                        url={shareUrl}
                        className="Demo__some-network__share-count">
                        {(count: any) => count}
                    </LinkedinShareCount>
                </div>

                <div className="Demo__some-network">
                    <PinterestShareButton
                        url={String(window.location)}
                        media={`${String(window.location)}/`}
                        windowWidth={1000}
                        windowHeight={730}
                        >
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>

                    <PinterestShareCount url={shareUrl}
                                         className="Demo__some-network__share-count" />
                </div>

                <div className="Demo__some-network">
                    <VKShareButton
                        url={shareUrl}
                        image={`${String(window.location)}`}
                        windowWidth={660}
                        windowHeight={460}
                        >
                        <VKIcon
                            size={32}
                            round />
                    </VKShareButton>

                    <VKShareCount url={shareUrl}
                                  className="Demo__some-network__share-count" />
                </div>

                <div className="Demo__some-network">
                    <RedditShareButton
                        url={shareUrl}
                        title={title}
                        windowWidth={660}
                        windowHeight={460}
                        >
                        <RedditIcon
                            size={32}
                            round />
                    </RedditShareButton>

                    <RedditShareCount url={shareUrl}
                                      className="Demo__some-network__share-count" />
                </div>

                <div className="Demo__some-network">
                    <TumblrShareButton
                        url={shareUrl}
                        title={title}
                        windowWidth={660}
                        windowHeight={460}
                        >
                        <TumblrIcon
                            size={32}
                            round />
                    </TumblrShareButton>

                    <TumblrShareCount url={shareUrl}
                                      className="Demo__some-network__share-count" />
                </div>

                <div className="Demo__some-network">
                    <LivejournalShareButton
                        url={shareUrl}
                        title={title}
                        description={shareUrl}
                    >
                        <LivejournalIcon size={32} round />
                    </LivejournalShareButton>
                </div>
                <div className="Demo__some-network">
                    <EmailShareButton
                        url={shareUrl}
                        subject={title}
                        body="body"
                        >
                        <EmailIcon
                            size={32}
                            round />
                    </EmailShareButton>
                </div>
            </div>
        );
    }
}
