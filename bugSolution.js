```javascript
// Correct implementation using unique class names
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
  Hover me!
</button>
<div class="bg-gray-300 text-white font-bold py-2 px-4 rounded">
  This element no longer gets the hover styles
</div>
//or
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-[#007bff]">
  Hover me!
</button>
<div class="bg-gray-300 text-white font-bold py-2 px-4 rounded">
  This element no longer gets the hover styles
</div>
```