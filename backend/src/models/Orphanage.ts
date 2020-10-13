import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orphanages') // decorator utilizado pelo typeorm para associar as tabelas com as classes. OBS: Muito parecido com Data Annotations do .NET
export default class Orphanage {
  
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;
}