<h3>What is Smart Search?</h3>

Smart Search allows to search the tables of columns.

<h3>How to use?</h3>

Firstly jQuery and Smart Search adds to the page.

```
<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="scripts/jquery.smartsearch.min.js"></script>
```

Later it can html add and do configurations.

```html
<input name="txtSearch" id="txtSearch" value="" />

<table id="reservationTable">
    <thead>
        <tr>
            <th>Hotel</th>
            <th>C-IN</th>
            <th>C-OUT</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-search="true" data-override="Hotel 1"><a href="#">Hotel 1</a></td>
            <td data-search="true">01.06.2014</td>
            <td data-search="true">01.07.2014</td>
            <td>Turkey</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td data-search="true" data-override="Hotel 2"><a href="#">Hotel 2</a></td>
            <td data-search="true">01.07.2014</td>
            <td data-search="true">01.08.2014</td>
            <td>Turkey</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td data-search="true" data-override="Hotel 1"><a href="#">Hotel 1</a></td>
            <td data-search="true">05.06.2014</td>
            <td data-search="true">15.07.2014</td>
            <td>Egypt</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td data-search="true" data-override="Hotel 2"><a href="#">Hotel 2</a></td>
            <td data-search="true">01.06.2014</td>
            <td data-search="true">01.07.2014</td>
            <td>Turkey</td>
        </tr>
    </tbody>
</table>
```

```javascript
$("#reservationTable tbody").smartsearch({
    searchColumn: "[data-search]",
    searchInput: "#txtSearch",
    selectedClass: "smart-search-select",
    endSearchRow: function (tbody, foundColumnCount) {
        if (foundColumnCount == 3) {
            tbody.hide();
        }
        else {
            tbody.show();
        }
    },
    endSearch: function () {
        //Logic
    }
});
```

<table>
   <thead>
    <tr>
      <th colspan="2">Properties</th>
    </tr>
  </thead>
  <thead>
    <tr>
      <th>Property Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>searchColumn</td>
      <td>This property is need to search on which column</td>
    </tr>
    <tr>
      <td>searchInput</td>
      <td>This property is need for search keyword</td>
    </tr>
    <tr>
      <td>selectedClass</td>
      <td>If keyword can find, this class applies to column</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colspan="2">Events</th>
    </tr>
  </thead>
  <thead>
    <tr>
      <th>Event Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>endSearchRow</td>
      <td>When search completed for each row, this event calls</td>
    </tr>
    <tr>
      <td>endSearch</td>
      <td>When search completed, this event calls</td>
    </tr>
  </tbody>
</table>
