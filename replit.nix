{ pkgs }: {
  deps = [
    pkgs.nodejs_20
    pkgs.yarn
    pkgs.git
    pkgs.cacert
  ];
}
