import './filterproducts.css'

export const Filterproducts = ()=>{
    return(
        <section>
            <div className='row box-sidebar'>
                <h4>Filter By</h4>
            </div>
            <div className='row gt-0 box-filter'>
                <h5>Category</h5>
                <li className='list-item'>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="defaultCheck1" value="option1"/>
                        <label class="form-check-label" for="defaultCheck1">
                            Mobile
                        </label>
                    </div>
                </li>

                <h5>Price</h5>
                <div className='price-input'>
                    <div className='field'>
                        <span className="currency">$</span>
                        <input type="number" className='input-min'  placeholder='Min' min="0" max="999"></input>
                    </div>
                    <div className='separator'>-</div>
                    <div className='field'>
                        <span className="currency">$</span>
                        <input type="number" className='input-mix'  placeholder='Mix' min="1" max="999"></input>
                    </div>
                </div>

                <h5>Brand</h5>
                <li className='list-item'>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="defaultCheck1" value="option1"/>
                        <label class="form-check-label" for="defaultCheck1">
                            Apple
                        </label>
                    </div>
                </li>

                

            </div>
        </section>
    )
}
