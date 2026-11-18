
import { router } from "expo-router";
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const serif = Platform.select({ ios: "Georgia", default: "serif" });

export default function Login() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.brand}>moment<Text style={s.dot}>.</Text></Text>
        <Text style={s.tagline}>A LITTLE SPACE TO SHARE</Text>
      </View>

      <View style={s.content}>
        <Text style={s.eyebrow}>WELCOME BACK</Text>
        <Text style={s.title}>Your people{'\n'}are <Text style={s.italic}>waiting.</Text></Text>
        <Text style={s.subtitle}>Sign in and catch up on what's happening.</Text>

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
          placeholder="Enter your password"
          placeholderTextColor="#A99E91"
          secureTextEntry
        />

        <Pressable style={s.button} onPress={() => router.replace("/(authenticated)/(tabs)/home")}>
          <Text style={s.buttonText}>Login</Text>
          <Text style={s.arrow}>↗</Text>
        </Pressable>

        <Text style={s.footer}>
          New here?{" "}
          <Text style={s.link} onPress={() => router.push("/(unauthenticated)/register")}>
            Create an account
          </Text>
        </Text>
      </View>

      <Text style={s.bottom}>SHARE YOUR THOUGHTS. SHARE YOUR WORLD.</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F4EE", paddingHorizontal: 28, paddingTop: 65, paddingBottom: 30, justifyContent: "space-between" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  brand: { fontSize: 27, fontFamily: serif, fontWeight: "bold", color: "#302D29" },
  dot: { color: "#C47B5B" },
  tagline: { fontSize: 8, letterSpacing: 1.5, color: "#A49A8E" },
  content: { width: "100%" },
  eyebrow: { color: "#C47B5B", fontSize: 10, letterSpacing: 2.5, fontWeight: "700", marginBottom: 17 },
  title: { fontFamily: serif, fontSize: 47, lineHeight: 55, color: "#302D29" },
  italic: { fontStyle: "italic", color: "#C47B5B" },
  subtitle: { color: "#92877B", fontSize: 13, marginTop: 12, marginBottom: 32 },
  label: { color: "#786E63", fontSize: 9, letterSpacing: 2, fontWeight: "700", marginTop: 19, marginBottom: 9 },
  input: { backgroundColor: "#FFFEFC", borderWidth: 1, borderColor: "#E9E2D8", borderRadius: 12, paddingHorizontal: 16, paddingVertical: 16, fontSize: 14, color: "#302D29" },
  button: { backgroundColor: "#302D29", padding: 18, borderRadius: 12, alignItems: "center", justifyContent: "center", marginTop: 32 },
  buttonText: { color: "#FFFFFF", fontWeight: "700", fontSize: 14, letterSpacing: 1 },
  arrow: { position: "absolute", right: 19, color: "#D7A184", fontSize: 19 },
  footer: { textAlign: "center", marginTop: 27, color: "#958A7E", fontSize: 12 },
  link: { color: "#C47B5B", fontWeight: "800" },
  bottom: { textAlign: "center", color: "#A99F93", fontSize: 8, letterSpacing: 2 },
});
