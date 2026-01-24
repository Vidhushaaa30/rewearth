<div className="mb-4">
  <input
  type="file"
  accept="image/*"
  id="upload"
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  }}
/>

<button
  type="button"
  className="mb-4 w-full rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-green-500"
  onClick={() => document.getElementById("upload")?.click()}
>
  {image ? (
    <img src={image} className="h-40 w-full object-cover rounded-lg" />
  ) : (
    <>
      <p>Click to upload image</p>
      <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
    </>
  )}
</button>

</div>
