# LightBenchmark.js

A **simple** and lightweight **benchmark tool in native JavaScript**.

![](doc/assets/screenshot.png)



### Usage

LightBenchmark.js is written in native JavaScript, so it **doesn't need any dependency**.
Just include [lightbenchmark.js](lightbenchmark.js) or [lightbenchmark.min.js](lightbenchmark.min.js) in `<head></head>` **or just before** `</body>` (**recommended**).

```html
  <script src="/your-custom-path/lightbenchmark.min.js"></script>
  <script src="/another-path/your-script.js"></script>
</body>
```



Then, you can call the **lightbenchmark function** in different ways.

The **most complete and useful way** is :

```javascript
var options = {name: 'name of the timer', loops: 'default'};
lightbenchmark(options, function (lbIncrement, lbOptions) {
  // Your instructions.
});
```

`name` must be a `string`. Default value : `'Default'`.

`loops` must be a `integer` or a **predefined value** :

* `'low'` : `1000` loops.
* `'default'` : `10000` loops. **Default value**.
* `'high'` : `100000` loops.

You don't necessarily have to specify `name` or `loops`, but they will be **replaced by default values**.



You can also access some **additional datas** by specify them as **arguments** of the function you give to lightbenchmark(). **You can give them the names you want** :

```javascript
lightbenchmark({}, function (lbIncrement, lbOptions) {});
```

* `lbIncrement` : increment variable.
* `lbOptions` : options you gave, composed of `lbOptions.name` and `lbOptions.loops`.



So, the **minimal way** to call lightbenchmark() is :

```javascript
lightbenchmark({}, function () {
  // Your instructions.
});
```



### Notes

* More the `loops` value is **high**, more the results will be **precise and accurate**.

* **The execution time may vary** depending on the **computer** and the **browser** used.

* If you like LightBenchmark.js, please ![](doc/assets/star-repo.png) this repository so it can **easily be found** and **help other developers**.

**Thank you !** :wink:



### License
LightBenchmark.js is released under the [MIT License](LICENSE).
