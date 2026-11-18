
import { router } from "expo-router";
import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const serif = Platform.select({ ios: "Georgia", default: "serif" });

export default function Register() {
  return (
    <ScrollView
      style={s.screen}
      contentContainerStyle={s.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={s.brand}>moment<Text style={s.dot}>.</Text></Text>

      <View style={s.heading}>
        <Text style={s.eyebrow}>JOIN THE COMMUNITY</Text>
        <Text style={s.title}>Every story{'\n'}starts <Text style={s.italic}>somewhere.</Text></Text>
        <Text style={s.subtitle}>Create your account and share your world.</Text>
      </View>

      <View style={s.form}>
        <Text style={s.label}>FULL NAME</Text>
        <TextInput
          style={s.input}
          placeholder="Your full name"
          placeholderTextColor="#A99E91"
        />

        <Text style={s.label}>EMAIL ADDRESS</Text>
        <TextInput
          style={s.input}
          placeholder="you@example.com"
          placeholderTextColor="#A99E91"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={s.label}>PASSWORD</Text>
        <TextInput
          style={s.input}
          placeholder="Create a password"
          placeholderTextColor="#A99E91"
          secureTextEntry
        />

        <Text style={s.label}>CONFIRM PASSWORD</Text>
        <TextInput
          style={s.input}
          placeholder="Repeat your password"
          placeholderTextColor="#A99E91"
          secureTextEntry
        />

        <Pressable style={s.button} onPress={() => router.replace("/(unauthenticated)/login")}>
          <Text style={s.buttonText}>Create Account</Text>
          <Text style={s.arrow}>↗</Text>
        </Pressable>
      </View>

      <Text style={s.footer}>
        Already have an account?{" "}
        <Text style={s.link} onPress={() => router.push("/(unauthenticated)/login")}>
          Login
        </Text>
      </Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F7F4EE" },
  container: { flexGrow: 1, paddingHorizontal: 28, paddingTop: 65, paddingBottom: 35 },
  brand: { fontSize: 27, fontFamily: serif, fontWeight: "bold", color: "#302D29" },
  dot: { color: "#C47B5B" },
  heading: { marginTop: 39, marginBottom: 20 },
  eyebrow: { color: "#C47B5B", fontSize: 10, letterSpacing: 2.5, fontWeight: "700", marginBottom: 15 },
  title: { fontFamily: serif, fontSize: 39, lineHeight: 48, color: "#302D29" },
  italic: { color: "#C47B5B", fontStyle: "italic" },
  subtitle: { fontSize: 12, color: "#92877B", marginTop: 10 },
  form: { marginTop: 5 },
  label: { color: "#786E63", fontSize: 9, letterSpacing: 2, fontWeight: "700", marginTop: 17, marginBottom: 9 },
  input: { backgroundColor: "#FFFEFC", borderWidth: 1, borderColor: "#E9E2D8", borderRadius: 12, paddingHorizontal: 16, paddingVertical: 15, fontSize: 14, color: "#302D29" },
  button: { backgroundColor: "#302D29", padding: 18, borderRadius: 12, alignItems: "center", justifyContent: "center", marginTop: 29 },
  buttonText: { color: "#FFFFFF", fontSize: 14, fontWeight: "700", letterSpacing: 1 },
  arrow: { position: "absolute", right: 19, color: "#D7A184", fontSize: 19 },
  footer: { textAlign: "center", color: "#958A7E", fontSize: 12, marginTop: 27 },
  link: { color: "#C47B5B", fontWeight: "800" },
});
