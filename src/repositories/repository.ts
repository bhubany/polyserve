export interface Repository<Entity, ID> {
  save(entity: Entity): Promise<Entity>;
  findById(id: ID): Promise<Entity | null>;
  findAll(): Promise<Entity[]>;
  update(id: ID, item: Partial<Entity>): Promise<Entity>;
  delete(id: ID): Promise<number>;
}
