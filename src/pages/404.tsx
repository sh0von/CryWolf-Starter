import { css, keyframes } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container as NotFoundPageWrapper } from 'components/Common/Container';
import styled from '@emotion/styled';

const ImageRotateAnimation = keyframes`
    100% {
    	transform: rotate(-360deg);
    }
`;

const ImageWrapper = css`
  width: 25rem;
  height: 25rem;
  margin-top: 12rem;
  margin: 0 auto;
  animation: ${ImageRotateAnimation} 5s linear infinite;
  transform-origin: 50% 50%;
`;

const NotFoundHeadStyle = styled.p`
  font-size: 3rem;
  font-style: normal;
  font-weight: 800;
  line-height: 60px;
  text-align: center;
  margin-top: 1.75rem;
`;

const NotFoundDetailStyle = styled.p`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 1rem;
`;

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundPageWrapper>
      <section
        css={css`
          margin-top: 4.6rem;
        `}
      >
        <NotFoundHeadStyle>404 Not Found</NotFoundHeadStyle>
        <NotFoundDetailStyle>
          No resources found you're looking for.
        </NotFoundDetailStyle>
      </section>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
