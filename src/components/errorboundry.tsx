import React, { Component } from 'react';

interface Props {
    readonly children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    static getDerivedStateFromError(): Partial<State> {
        // Update state to display the fallback UI after an error occurs
        return { hasError: true };
    }
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
        const { children: nextChildren } = nextProps;
        const { hasError: nextHasError } = nextState;

        const { children: currentChildren } = this.props;
        const { hasError: currentHasError } = this.state;
        return (
            nextChildren !== currentChildren ||
            nextHasError !== currentHasError
        );
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        const { message, name } = error;
        console.error('ErrorBoundary caught an error:', { name, message }, errorInfo);
    }
    render():React.ReactNode {
        const { hasError } = this.state;

        if (hasError) {
            return (
                <h1>Something went wrong.</h1>
            );
        }

        const { children } = this.props;
        return children;
    }
}

export default ErrorBoundary;