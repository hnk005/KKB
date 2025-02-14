import { PropsWithChildren, ReactElement, ReactNode, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

interface DialogCommonProps {
    open: boolean,
    onClose: () => void,
    children: ReactNode
}

const DialogCommon : React.FC<DialogCommonProps> = ({open, onClose, children}) : ReactElement => {
    return (
        <Dialog open={open} onClose={onClose} className="relative z-10">
            {children}
        </Dialog>
    )
}

export default DialogCommon;