   function getCurrentHTMLNode(node) {
        console.log(node); // Nodo actual
        // Checa los nodos
        if (node.hasChildNodes()) {
          let child = node.firstChild;
          while (child) {
            // llamar la funcion recursivamente
            getCurrentHTMLNode(child);
            child = child.nextSibling;
          }
        }
        let root = document.getElementById("root");
        console.log(getCurrentHTMLNode(root));
      }