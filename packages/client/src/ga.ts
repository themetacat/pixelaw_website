import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-2KKJ3GQM6W'); 
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};