import { Dialog } from '@mui/material';
import { DialogPropType } from '@src/types/DialogType';
import { Navigate } from 'react-router-dom';

function Book({ open, onClose }: DialogPropType) {
  return (
    <Dialog onClose={onClose} open={open} maxWidth='lg'>
      <Navigate to='/resume/projects/catalog' />
    </Dialog>
  );
}

export default Book;
