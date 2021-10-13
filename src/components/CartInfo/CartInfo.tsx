import { Box, Button, Modal, Typography } from "@material-ui/core";
import Cart from "../../types/Cart";
import "./CartInfo.css";

interface CartInfoProps {
  open: boolean;
  handleClose(event: any): void;
  cart: Cart;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CartInfo: React.FC<CartInfoProps> = (props) => {
  var lineItems = 0;
  if (props.cart !== undefined && props.cart.lineItems !== undefined) {
    lineItems = props.cart.getNumberOfItems();
  }
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description">{lineItems}</Typography>
        <Button
          className="cartButton"
          variant="contained"
          onClick={props.handleClose}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CartInfo;
