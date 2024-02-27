// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

/* Autogenerated file. Do not edit manually. */

import { PermissionsData, PixelData, PixelUpdateData } from "./../index.sol";

/**
 * @title ICoreSystem
 * @dev This interface is automatically generated from the corresponding system contract. Do not edit manually.
 */
interface ICoreSystem {
  function init() external;

  function update_permission(string memory app_name, PermissionsData memory permission_param) external;

  function update_app(string memory name, string memory icon) external;

  function has_write_access(
    address for_system,
    PixelData memory pixel,
    PixelUpdateData memory pixel_update
  ) external view returns (bool);

  function update_pixel(PixelUpdateData memory pixel_update) external;

  function convertToBytes32(string memory input) external pure returns (bytes32);
}
