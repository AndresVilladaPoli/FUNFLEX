import React from "react";

const ProductDescriptions = () => {
  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#item1"
            type="button"
            role="tab"
            aria-selected="true"
          >
            Description
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#item2"
            type="button"
            role="tab"
            aria-selected="false"
          >
            Technical Info
          </button>
        </li>
      </ul>

      <div className="tab-content mt-50 lg-mt-20">
        <div className="tab-pane fade show active" id="item1" role="tabpanel">
          <div className="row gx-5">
            <div className="col-xl-6">
              <h5>Description detail:</h5>
              <p>
              
The PlayStation 5 (PS5) is the latest video game console developed by Sony Interactive Entertainment. Released in November 2020, the PS5 represents a significant leap in terms of power, performance, and features compared to its predecessor, the PlayStation 4.
              </p>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="item2" role="tabpanel">
          <div className="row gx-5">
            <div className="col-xl-6">
              <h5>Specification:</h5>
              <ul className="style-none product-feature">
                <li>
                  <strong>CPU:</strong> Custom AMD Ryzen Octa-core.
                </li>
                <li>
                <strong>GPU:</strong> Custom RDNA 2 with ray tracing.
                </li>
                <li>
                <strong>Memory:</strong> 8GB GDDR6 RAM.
                </li>
                <li>
                <strong>Storage:</strong> Various configurations.
                </li>
                <li>
                <strong>Optical Drive:</strong> 4K UHD Blu-ray.
                </li>
                <li>
                <strong>Connectivity:</strong> Wi-Fi 6, Bluetooth 5.1, USB ports.
                </li>
                <li>
                <strong>Audio:</strong> Tempest 3D AudioTech.
                </li>
                <li>
                <strong>Resolution:</strong> 4K gaming support.
                </li>
                <li>
                <strong>Controller:</strong> DualSense wireless.
                </li>
                <li>
                <strong>Compatibility:</strong> Supports a wide range of PS4 games.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescriptions;
