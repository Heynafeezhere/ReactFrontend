import SellerSidebar from './SellerSidebar';

function AddProduct() {
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar />
                </div>
                <div className='col-md-9 col-12 mb-1'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Add Product</h4>
                        </div>
                        <div className="card-body mt-1">
                            <form>
                                {/* <!-- Category --> */}
                                <div class="mb-3">
                                    <label for="category" class="form-label fw-bold">Category</label>
                                    <select class="form-select" id="category" name="category" required>
                                        <option value="" disabled selected>Select Category</option>
                                        {/* <!-- Dynamic options will be populated here --> */}
                                        <option value="1">Electronics</option>
                                        <option value="2">Apparel</option>
                                    </select>
                                </div>

                                {/* <!-- Vendor --> */}
                                <div class="mb-3">
                                    <label for="vendor" class="form-label fw-bold">Vendor</label>
                                    <select class="form-select" id="vendor" name="vendor" required>
                                        <option value="" disabled selected>Select Vendor</option>
                                        {/* <!-- Dynamic options will be populated here --> */}
                                        <option value="1">Vendor A</option>
                                        <option value="2">Vendor B</option>
                                    </select>
                                </div>

                                {/* <!-- Name --> */}
                                <div class="mb-3">
                                    <label for="name" class="form-label fw-bold">Product Name</label>
                                    <input type="text" class="form-control" id="name" name="name" maxlength="255" required/>
                                </div>

                                {/* <!-- Description --> */}
                                <div class="mb-3">
                                    <label for="description" class="form-label fw-bold">Description</label>
                                    <textarea class="form-control" id="description" name="description" rows="4"></textarea>
                                </div>

                                {/* <!-- Price --> */}
                                <div class="mb-3">
                                    <label for="price" class="form-label fw-bold">Price (₹)</label>
                                    <input type="number" class="form-control" id="price" name="price" step="0.01" max="99999999.99" required/>
                                </div>

                                {/* <!-- Stock Quantity --> */}
                                <div class="mb-3">
                                    <label for="stock_quantity" class="form-label fw-bold">Stock Quantity</label>
                                    <input type="number" class="form-control" id="stock_quantity" name="stock_quantity" min="0" required/>
                                </div>

                                {/* <!-- Image --> */}
                                <div class="mb-3">
                                    <label for="image" class="form-label fw-bold">Product Images</label>
                                    <input type="file" class="form-control" id="image" name="image" accept="image/*" required/>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddProduct;