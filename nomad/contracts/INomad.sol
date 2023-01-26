pragma solidity ^0.8.0;

interface INomad {
  function process(bytes memory _message) external returns (bool _success);
}