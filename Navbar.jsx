import { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button, Dropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [user] = useState({ name: "Ritesh" }); // Simulated logged-in user
  const cartItemCount = 10; // Example cart count

  return (
    <Navbar expand="lg" className="shadow-sm px-3" style={{ backgroundColor: "#ffffff" }}>
      <Container>
        {/* Flipkart Logo */}
        <Navbar.Brand className="fw-bold text-primary">
          Flipkart<span className="text-warning"> Plus</span>
        </Navbar.Brand>

        {/* Search Bar */}
        <Form className="d-flex mx-auto w-50">
          <div className="input-group">
            <span className="input-group-text bg-light border-0">
              <i className="bi bi-search text-muted"></i>
            </span>
            <FormControl
              type="search"
              placeholder="Search for Products, Brands and More"
              className="border-0 shadow-none"
              style={{ backgroundColor: "#f0f5ff" }}
            />
          </div>
        </Form>

        <Nav>
          {/* Profile Dropdown */}
          <Dropdown className="me-3">
            <Dropdown.Toggle variant="light" id="profile-dropdown" className="d-flex align-items-center">
              <i className="bi bi-person fs-5 me-1"></i> {user.name}
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item as={Link} to="/profile">
                <i className="bi bi-person"></i> My Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/supercoin">
                <i className="bi bi-coin"></i> SuperCoin Zone
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/plus-zone">
                <i className="bi bi-star"></i> Flipkart Plus Zone
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/orders">
                <i className="bi bi-box"></i> Orders
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/wishlist">
                <i className="bi bi-heart"></i> Wishlist (5)
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/coupons">
                <i className="bi bi-tag"></i> Coupons
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/giftcards">
                <i className="bi bi-gift"></i> Gift Cards
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/notifications">
                <i className="bi bi-bell"></i> Notifications
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/logout">
                <i className="bi bi-box-arrow-right"></i> Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Cart Icon */}
          <Nav.Link as={Link} to="/cart" className="text-dark fw-semibold d-flex align-items-center me-3">
            <i className="bi bi-cart3 fs-5"></i>
            <span className="ms-1">Cart</span>
            <Badge bg="danger" className="ms-1">{cartItemCount}</Badge>
          </Nav.Link>

          {/* Become a Seller */}
          <Nav.Link as={Link} to="/seller" className="text-dark fw-semibold d-flex align-items-center me-3">
            <i className="bi bi-shop fs-5 me-1"></i>
            <span>Become a Seller</span>
          </Nav.Link>

          {/* More Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="light" id="more-dropdown" className="d-flex align-items-center">
              <i className="bi bi-three-dots-vertical fs-5"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item as={Link} to="/notifications">
                <i className="bi bi-bell"></i> Notification Preferences
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/customer-care">
                <i className="bi bi-headset"></i> 24x7 Customer Care
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/advertise">
                <i className="bi bi-megaphone"></i> Advertise
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/download">
                <i className="bi bi-download"></i> Download App
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
