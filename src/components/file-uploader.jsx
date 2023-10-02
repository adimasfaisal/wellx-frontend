import { useDropzone } from "react-dropzone";

export default function FileUploader() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/pdf": [".pdf"],
    },
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      <section className="container bg-default-100 hover:bg-default-200 mt-2 w-full font-normal outline-none placeholder:text-foreground-500 text-small py-2 px-3 rounded-medium border-dashed border-2 border-default-400">
        <div
          {...getRootProps({
            className:
              "dropzone h-32 cursor-pointer grid h-screen place-items-center",
          })}
        >
          <input {...getInputProps()} />
          <p>Drag 'n' drop CV with PDF format here, or click to select files</p>
        </div>
      </section>
      {files.length > 0 && (
        <aside className="px-3 py-2">
          <h4 className="font-bold">Uploaded Files</h4>
          <ul>{files}</ul>
        </aside>
      )}
    </div>
  );
}
