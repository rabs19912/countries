import {ReactNode} from 'react';
import {Navbar} from '../Navbar/Navbar';
import {LoadingIcon, Wrapper} from './styled';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


type PageProps = {
  children: ReactNode;
  isLoading: boolean
};

const defaultProps: PageProps = {
  children: '',
  isLoading: false
};

function Page({
  children,
  isLoading
}: PageProps) {
  return (
    <Wrapper>
      <Navbar />
      {
        isLoading ? (
          <LoadingIcon icon={faSpinner} />
        ) : (
          (children)
        ) 
      }
      
       {/* {children} */}
    </Wrapper>
  );
}

Page.defaultProps = defaultProps;

export {Page};
