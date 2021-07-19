interface ImageDataInterface {
  deleted_at?: string;
  is_deleted?: boolean;
  villa?: string;
  coliving?: boolean;
  created_at?: string;
  description?: string;
  updated_at?: string;
  id: string;
  filename?: string;
  image_url?: string;
  file?: number;
  backup_image_of?: string;
  guest_service?: boolean;
  property?: number;
  order?: number;
  page?: number;
  location?: string;
  residentsCount?: number;
  bathsCount?: number;
  bedroomsCount?: number;
  price?: string;
  period?: string;
}

export default ImageDataInterface;
