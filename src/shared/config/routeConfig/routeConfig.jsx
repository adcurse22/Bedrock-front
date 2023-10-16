import { PrivateRoute } from 'shared/components'; 
import { HomePage } from 'pages/HomePage';
import { SigninPage } from 'pages/SigninPage';
import { SignupPage } from 'pages/SignupPage';
import { NoteEdit } from 'pages/NoteEdit';
import { Graph } from 'widgets/GraphView';
import { NotFoundPage } from 'pages/NotFoundPage';

export const AppRoutes = {
    MAIN: 'main',
    SIGN_IN: 'sign-in',
    SIGN_UP: 'sign-up',
    NOTE_EDIT: 'note-edit',
    ELSE: 'else'
};

export const HomeRoutes = {
    HOME: 'home',
    NOTE_EDIT: 'note-edit',
    ELSE: 'else'
};

export const routeConfig = {
    [AppRoutes.MAIN]: {
        path: '/*',
        element: (<PrivateRoute><HomePage /></PrivateRoute>)
    },
    [AppRoutes.SIGN_IN]: {
        path: '/sign-in',
        element: (<SigninPage />)
    },
    [AppRoutes.SIGN_UP]: {
        path: '/sign-up',
        element: (<SignupPage />)
    }
};

export const homeRouteConfig = {
    [HomeRoutes.HOME]: {
        path: '/',
        element: <Graph />
    },
    [HomeRoutes.NOTE_EDIT]: {
        path: '/note/:id',
        element: <NoteEdit />
    },
    [HomeRoutes.ELSE]: {
        path: '*',
        element: <NotFoundPage />
    }
};
