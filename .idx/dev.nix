{ pkgs, ... }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
  ];
  env = {};
  idx = {};
}
