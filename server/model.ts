import TypeORM from "typeorm"; 
import { Connection, ValueTransformer } from "typeorm";
import "reflect-metadata";

const {
	Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, ViewEntity, createConnection
} = TypeORM;

@Entity({ name: "Users" })
export class User {
	@Column("text", { primary: true, nullable: false })
	name: string;
}

let connection: Promise<Connection> | null = null;

export async function db() {
	if(connection === null) {
		const entities = [User];
		connection = createConnection({
			type: "sqlite",
			database: ":memory:",
			entities,
			synchronize: true
		})
	}
	return connection!;
}