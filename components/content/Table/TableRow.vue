<template>
  <tr class="bg-white border-b text-black-600">
    <th scope="row" class="px-6 py-4 border-none font-bold whitespace-nowrap">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </th>
    <td class="px-6 py-4">
      <ContentSlot :use="$slots.item" unwrap="p" />
    </td>
  </tr>
</template>
