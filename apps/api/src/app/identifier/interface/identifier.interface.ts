export interface IdentifierDTO {
  identifier: {
    name: String;
    code: String;
  };
}

export interface IdentifierInterface {
  generateIdentifier(): Promise<IdentifierDTO>;
}
