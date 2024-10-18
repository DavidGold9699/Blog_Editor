import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import ButtonSpinner from "./ButtonSpinner";

interface DeleteBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
  DeleteBlogLoading: boolean
}

const DeleteBlogModal: React.FC<DeleteBlogModalProps> = ({
  isOpen,
  onClose,
  onConfirmDelete,
  DeleteBlogLoading,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent className="mt-1">Are you sure you want to delete this blog?</DialogContent>
      <DialogActions className="flex gap-1 mt-4">
        <Button
          sx={{ textTransform: "none" }}
          variant="contained"
          onClick={onClose}
          size="small"
          color="info"
        >
          Cancel
        </Button>
        <Button
          sx={{ textTransform: "none" }}
          variant="contained"
          onClick={onConfirmDelete}
          size="small"
          color="error"
        >
          {DeleteBlogLoading ? <ButtonSpinner /> : "Delete"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteBlogModal;
