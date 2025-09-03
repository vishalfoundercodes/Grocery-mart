import CartSidebar from "./CartSidebar";
import AddressCartSlider from "./AddressCart";

export default function CartManager({
  cartOpen,
  setCartOpen,
  addressOpen,
  setAddressOpen,
}) {
  const handleOpenAddress = () => {
    setCartOpen(false);

    // Add delay so cart closes first, then address opens
    setTimeout(() => {
      setAddressOpen(true);
    }, 300); // match CartSidebar transition
  };

  return (
    <>
      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onAddressOpen={handleOpenAddress}
      />

      <AddressCartSlider
        open={addressOpen}
        onClose={() => {
          setAddressOpen(false);
          setTimeout(() => setCartOpen(true), 300); // go back to cart
        }}
      />
    </>
  );
}
