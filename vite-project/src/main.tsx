import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from '@routes/Home.tsx';
import Project from '@routes/Project';
import ULSpeak from './components/projects/ULSpeak';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/resume/',
    element: <Home />,
  },
  {
    path: '/resume/projects/',
    element: <Project />,
    children: [
      {
        path: '/resume/projects/:projectId',
        element: <Project />,
      },
    ],
  },
  {
    path: '/resume/test',
    element: <ULSpeak />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
