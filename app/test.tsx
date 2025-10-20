import { dbDeleteDoc, dbDeleteField } from "@/scripts/firestore/db-delete";
import { dbWrite } from "@/scripts/firestore/db-write";
import { Button, View } from "react-native";

export default function Test() {
  return (
    <View
      style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}
    >
      <Button
        title="dbWrite"
        onPress={() => {
          dbWrite({
            collection: {
              document: {
                field1: "asdaf",
                field2: [1, 2, 3, 4],
                subcollection: {
                  subdocument: {
                    subfield1: "qwert",
                    subfield2: "12345",
                    subsubcollection: {
                      subsubdocument: {
                        subsubfield1: "qwert",
                        subsubfield2: "12345",
                      },
                    },
                  },
                },
              },
            },
          });
        }}
      />
      <Button
        title="dbDeleteField"
        onPress={() => {
          dbDeleteField(
            "collection/document/subcollection/subdocument/subsubcollection/subsubdocument/subsubfield1"
          );
        }}
      />
      <Button
        title="dbDeleteDoc"
        onPress={() => {
          dbDeleteDoc(
            "collection/document/subcollection/subdocument/subsubcollection/test"
          );
        }}
      />
    </View>
  );
}
