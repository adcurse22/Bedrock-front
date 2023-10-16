import React, { Suspense } from 'react';
import { PageError } from 'widgets/PageError/ui/PageError';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errornfo) {
        console.log(error, errornfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return <Suspense fallback=""><PageError /></Suspense>;
        }
        return children;
    }
}
