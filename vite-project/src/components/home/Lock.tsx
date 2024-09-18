import { Dialog } from '@mui/material';
import { DialogPropType } from '@src/types/DialogType';

function Lock({ open, onClose }: DialogPropType) {
  return (
    <Dialog onClose={onClose} open={open}>
      Lock
    </Dialog>
  );
}

export default Lock;
