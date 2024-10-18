import React, { useState, useEffect, FC } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { CreateBlogResponse } from "../vite-env";
import { Button } from "@mui/material";
import ButtonSpinner from "./ButtonSpinner";

interface UpdateBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateBlog: (updatedBlog: Partial<CreateBlogResponse>) => void;
  initialBlog: CreateBlogResponse | null;
  UpdateBlogLoading: boolean;
  refetch: () => void;
}

const UpdateBlogModal: FC<UpdateBlogModalProps> = ({
  isOpen,
  onClose,
  onUpdateBlog,
  initialBlog,
  UpdateBlogLoading,
  refetch,
}) => {
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  useEffect(() => {
    if (initialBlog) {
      setUpdatedTitle(initialBlog.title);
      setUpdatedDescription(initialBlog.description);
    }
  }, [initialBlog]);

  const handleUpdate = () => {
    const updatedBlog: Partial<CreateBlogResponse> = {
      title: updatedTitle,
      description: updatedDescription,
    };
    onUpdateBlog(updatedBlog);
    onClose();

    setUpdatedTitle('');
    // refetch();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
      <p className="flex justify-center text-2xl font-semibold py-6">
        Add Blog
      </p>
      <DialogContent className="flex flex-col gap-8">
        <TextField
          label="Title"
          fullWidth
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        {/* <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
        /> */}
      </DialogContent>
      <DialogActions>
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
          size="small"
          color="info"
          sx={{ textTransform: "none" }}
          variant="contained"
          onClick={handleUpdate}
        >
          {UpdateBlogLoading ? <ButtonSpinner /> : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateBlogModal;
