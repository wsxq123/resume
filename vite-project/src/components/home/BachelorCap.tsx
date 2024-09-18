import { Dialog } from '@mui/material';
import { DialogPropType } from '@src/types/DialogType';

function BachelorCap({ open, onClose }: DialogPropType) {
  return (
    <Dialog onClose={onClose} open={open}>
      Book
    </Dialog>
  );
}

export default BachelorCap;
