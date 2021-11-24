interface FormFile extends File {
  objectURL: any
}

export interface FormField {
  image: FormFile | null,
  url: string,
  animation: string
}
