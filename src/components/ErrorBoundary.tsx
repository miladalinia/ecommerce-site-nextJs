'use client';

import React, { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
    children?: ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    }

    static getDerivedStateFromError(_: Error): State {
        return {
            hasError: true
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('error:', error)
        console.error('errorInfo:', errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;