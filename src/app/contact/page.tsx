import IDELayout from "@/components/ide/IDELayout";
import Terminal from "@/components/terminal/Terminal";

export default function ContactPage() {
    return (
        <IDELayout>
            <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-5xl flex-col justify-center px-6 py-12 md:px-12 lg:px-16">
                <div className="mb-8">
                    <h1 className="font-heading text-4xl font-bold text-text-bright md:text-5xl">
                        Contact
                    </h1>
                    <p className="mt-4 text-xl text-accent">
                        Initialize communication sequence...
                    </p>
                </div>

                <Terminal />
            </div>
        </IDELayout>
    );
}
