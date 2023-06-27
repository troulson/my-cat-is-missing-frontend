import React from 'react';
import { Toast } from 'react-bootstrap';

interface ErrorToastProps {
    message: string;
    onClose: () => void;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ message, onClose }) => {
    return (
        <Toast onClose={onClose} show autohide className="bg-danger text-white" style={{ position: 'fixed',
            bottom: '1rem', left: '1rem'}}>
            <Toast.Header closeButton>
                <strong className="me-auto">Error</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
};

export default ErrorToast;
